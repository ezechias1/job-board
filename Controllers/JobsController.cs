using JobBoardApi.Interfaces;
using JobBoardApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace JobBoardApi.Controllers;

/// <summary>
/// RESTful controller for managing job listings.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class JobsController : ControllerBase
{
    private readonly IJobService _jobService;

    public JobsController(IJobService jobService)
    {
        _jobService = jobService;
    }

    /// <summary>
    /// Retrieves all active job listings, optionally filtered by search query, location, and type.
    /// </summary>
    /// <param name="query">Free-text search across title, company, and description.</param>
    /// <param name="location">Filter by job location (e.g. "Cape Town", "Remote").</param>
    /// <param name="type">Filter by employment type (e.g. "Full-Time", "Contract").</param>
    /// <returns>A list of matching job listings.</returns>
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Job>), StatusCodes.Status200OK)]
    public ActionResult<IEnumerable<Job>> GetAll(
        [FromQuery] string? query,
        [FromQuery] string? location,
        [FromQuery] string? type)
    {
        var hasFilters = !string.IsNullOrWhiteSpace(query)
                      || !string.IsNullOrWhiteSpace(location)
                      || !string.IsNullOrWhiteSpace(type);

        var jobs = hasFilters
            ? _jobService.Search(query, location, type)
            : _jobService.GetAll();

        return Ok(jobs);
    }

    /// <summary>
    /// Retrieves a single job listing by its unique identifier.
    /// </summary>
    /// <param name="id">The job ID.</param>
    /// <returns>The job listing if found.</returns>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(Job), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<Job> GetById(int id)
    {
        var job = _jobService.GetById(id);
        if (job is null) return NotFound();
        return Ok(job);
    }

    /// <summary>
    /// Creates a new job listing.
    /// </summary>
    /// <param name="job">The job data to create.</param>
    /// <returns>The newly created job listing.</returns>
    [HttpPost]
    [ProducesResponseType(typeof(Job), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<Job> Create([FromBody] Job job)
    {
        if (string.IsNullOrWhiteSpace(job.Title) || string.IsNullOrWhiteSpace(job.Company))
            return BadRequest("Title and Company are required.");

        var created = _jobService.Create(job);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    /// <summary>
    /// Updates an existing job listing.
    /// </summary>
    /// <param name="id">The ID of the job to update.</param>
    /// <param name="job">The updated job data.</param>
    /// <returns>The updated job listing.</returns>
    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(Job), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<Job> Update(int id, [FromBody] Job job)
    {
        if (string.IsNullOrWhiteSpace(job.Title) || string.IsNullOrWhiteSpace(job.Company))
            return BadRequest("Title and Company are required.");

        var updated = _jobService.Update(id, job);
        if (updated is null) return NotFound();
        return Ok(updated);
    }

    /// <summary>
    /// Soft-deletes a job listing by marking it as inactive.
    /// </summary>
    /// <param name="id">The ID of the job to delete.</param>
    /// <returns>No content on success.</returns>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Delete(int id)
    {
        var deleted = _jobService.Delete(id);
        if (!deleted) return NotFound();
        return NoContent();
    }
}

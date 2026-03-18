using JobBoardApi.Models;

namespace JobBoardApi.Interfaces;

/// <summary>
/// Defines operations for managing job listings.
/// </summary>
public interface IJobService
{
    IEnumerable<Job> GetAll();
    Job? GetById(int id);
    Job Create(Job job);
    Job? Update(int id, Job job);
    bool Delete(int id);
    IEnumerable<Job> Search(string? query, string? location, string? type);
}

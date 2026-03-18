namespace JobBoardApi.Models;

/// <summary>
/// Represents a job listing on the board.
/// </summary>
public class Job
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public decimal MinSalary { get; set; }
    public decimal MaxSalary { get; set; }
    public string Description { get; set; } = string.Empty;
    public string[] Requirements { get; set; } = [];
    public DateTime PostedDate { get; set; }
    public bool IsActive { get; set; } = true;
}

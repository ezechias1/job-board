using JobBoardApi.Interfaces;
using JobBoardApi.Models;

namespace JobBoardApi.Services;

/// <summary>
/// In-memory implementation of <see cref="IJobService"/> seeded with South African tech jobs.
/// </summary>
public class JobService : IJobService
{
    private readonly List<Job> _jobs;
    private int _nextId;

    public JobService()
    {
        _jobs = SeedJobs();
        _nextId = _jobs.Max(j => j.Id) + 1;
    }

    public IEnumerable<Job> GetAll() =>
        _jobs.Where(j => j.IsActive).OrderByDescending(j => j.PostedDate);

    public Job? GetById(int id) =>
        _jobs.FirstOrDefault(j => j.Id == id);

    public Job Create(Job job)
    {
        job.Id = _nextId++;
        job.PostedDate = DateTime.UtcNow;
        job.IsActive = true;
        _jobs.Add(job);
        return job;
    }

    public Job? Update(int id, Job job)
    {
        var existing = _jobs.FirstOrDefault(j => j.Id == id);
        if (existing is null) return null;

        existing.Title = job.Title;
        existing.Company = job.Company;
        existing.Location = job.Location;
        existing.Type = job.Type;
        existing.MinSalary = job.MinSalary;
        existing.MaxSalary = job.MaxSalary;
        existing.Description = job.Description;
        existing.Requirements = job.Requirements;
        existing.IsActive = job.IsActive;

        return existing;
    }

    public bool Delete(int id)
    {
        var job = _jobs.FirstOrDefault(j => j.Id == id);
        if (job is null) return false;

        job.IsActive = false;
        return true;
    }

    public IEnumerable<Job> Search(string? query, string? location, string? type)
    {
        var results = _jobs.Where(j => j.IsActive).AsEnumerable();

        if (!string.IsNullOrWhiteSpace(query))
        {
            var q = query.ToLowerInvariant();
            results = results.Where(j =>
                j.Title.Contains(q, StringComparison.OrdinalIgnoreCase) ||
                j.Company.Contains(q, StringComparison.OrdinalIgnoreCase) ||
                j.Description.Contains(q, StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(location))
        {
            results = results.Where(j =>
                j.Location.Contains(location, StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(type))
        {
            results = results.Where(j =>
                j.Type.Equals(type, StringComparison.OrdinalIgnoreCase));
        }

        return results.OrderByDescending(j => j.PostedDate);
    }

    private static List<Job> SeedJobs() =>
    [
        new Job
        {
            Id = 1,
            Title = "Senior Full-Stack Developer",
            Company = "Takealot",
            Location = "Cape Town",
            Type = "Full-Time",
            MinSalary = 650_000,
            MaxSalary = 900_000,
            Description = "Join Takealot's engineering team to build and scale South Africa's leading e-commerce platform. You will work across the React front-end and .NET microservices powering millions of daily transactions.",
            Requirements = ["5+ years C# / .NET experience", "React or Angular proficiency", "SQL Server and Redis knowledge", "Experience with high-traffic distributed systems", "CI/CD pipeline familiarity"],
            PostedDate = new DateTime(2026, 3, 12),
            IsActive = true
        },
        new Job
        {
            Id = 2,
            Title = "DevOps Engineer",
            Company = "Yoco",
            Location = "Cape Town",
            Type = "Full-Time",
            MinSalary = 600_000,
            MaxSalary = 850_000,
            Description = "Help Yoco scale its payment infrastructure that serves thousands of small businesses across Africa. Own CI/CD pipelines, Kubernetes clusters, and observability tooling in AWS.",
            Requirements = ["3+ years DevOps or SRE experience", "AWS (EKS, EC2, RDS, Lambda)", "Terraform and Infrastructure as Code", "Docker and Kubernetes", "Monitoring with Datadog or Prometheus"],
            PostedDate = new DateTime(2026, 3, 10),
            IsActive = true
        },
        new Job
        {
            Id = 3,
            Title = "Data Analyst",
            Company = "Investec",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 450_000,
            MaxSalary = 650_000,
            Description = "Analyse large financial datasets to generate actionable insights for Investec's private banking and wealth management divisions. Produce dashboards and reports that drive strategic decisions.",
            Requirements = ["SQL and Python proficiency", "Experience with Power BI or Tableau", "Financial services background preferred", "Strong statistical analysis skills", "Excellent communication skills"],
            PostedDate = new DateTime(2026, 3, 8),
            IsActive = true
        },
        new Job
        {
            Id = 4,
            Title = "Cloud Solutions Architect",
            Company = "Discovery",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 750_000,
            MaxSalary = 900_000,
            Description = "Design and implement cloud-native solutions for Discovery's insurance, health, and financial services platforms. Lead migration strategies and mentor development teams on Azure best practices.",
            Requirements = ["Azure Solutions Architect certification", "5+ years cloud architecture experience", "Microservices and event-driven design", "Cost optimisation and FinOps knowledge", "Strong leadership and communication"],
            PostedDate = new DateTime(2026, 3, 6),
            IsActive = true
        },
        new Job
        {
            Id = 5,
            Title = "Mobile Developer (Android)",
            Company = "FNB",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 550_000,
            MaxSalary = 780_000,
            Description = "Build features for the award-winning FNB banking app used by millions of South Africans daily. Work with Kotlin, Jetpack Compose, and modern Android architecture components.",
            Requirements = ["3+ years native Android development", "Kotlin and Jetpack Compose", "MVVM / Clean Architecture patterns", "RESTful API integration", "Unit and UI testing experience"],
            PostedDate = new DateTime(2026, 3, 5),
            IsActive = true
        },
        new Job
        {
            Id = 6,
            Title = "Cybersecurity Analyst",
            Company = "Standard Bank",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 500_000,
            MaxSalary = 720_000,
            Description = "Protect Standard Bank's digital assets and customer data across Africa's largest banking group. Monitor threats, conduct vulnerability assessments, and respond to security incidents.",
            Requirements = ["CISSP, CEH, or equivalent certification", "SIEM tools (Splunk, QRadar)", "Incident response experience", "Network security and firewall management", "Knowledge of banking security regulations"],
            PostedDate = new DateTime(2026, 3, 4),
            IsActive = true
        },
        new Job
        {
            Id = 7,
            Title = "Machine Learning Engineer",
            Company = "Vodacom",
            Location = "Cape Town",
            Type = "Full-Time",
            MinSalary = 600_000,
            MaxSalary = 880_000,
            Description = "Develop and deploy ML models for Vodacom's network optimisation, customer churn prediction, and personalised marketing. Work with large telco datasets at continental scale.",
            Requirements = ["Python, TensorFlow or PyTorch", "MLOps (MLflow, Kubeflow)", "Feature engineering on large datasets", "Model deployment and monitoring", "MSc in Computer Science or related field preferred"],
            PostedDate = new DateTime(2026, 3, 3),
            IsActive = true
        },
        new Job
        {
            Id = 8,
            Title = "Backend Developer (Java)",
            Company = "MTN",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 500_000,
            MaxSalary = 750_000,
            Description = "Design and build high-throughput backend services for MTN's fintech and digital services platforms serving 280 million subscribers across Africa and the Middle East.",
            Requirements = ["4+ years Java / Spring Boot", "Kafka or RabbitMQ experience", "PostgreSQL and NoSQL databases", "Microservices architecture", "Agile / Scrum methodology"],
            PostedDate = new DateTime(2026, 3, 1),
            IsActive = true
        },
        new Job
        {
            Id = 9,
            Title = "React Developer",
            Company = "Capitec",
            Location = "Stellenbosch",
            Type = "Full-Time",
            MinSalary = 480_000,
            MaxSalary = 700_000,
            Description = "Build intuitive, accessible banking interfaces for Capitec's rapidly growing digital platform. Collaborate closely with UX designers to deliver delightful user experiences.",
            Requirements = ["3+ years React with TypeScript", "State management (Redux, Zustand)", "Responsive design and accessibility (WCAG)", "Jest and React Testing Library", "GraphQL experience a plus"],
            PostedDate = new DateTime(2026, 2, 28),
            IsActive = true
        },
        new Job
        {
            Id = 10,
            Title = "Engineering Manager",
            Company = "Naspers",
            Location = "Cape Town",
            Type = "Full-Time",
            MinSalary = 800_000,
            MaxSalary = 900_000,
            Description = "Lead a cross-functional engineering team at Naspers, one of the world's largest technology investors. Drive technical strategy, team growth, and delivery across portfolio companies.",
            Requirements = ["7+ years software engineering experience", "3+ years people management", "Experience scaling engineering teams", "Strong product and business acumen", "Track record of shipping high-impact products"],
            PostedDate = new DateTime(2026, 2, 25),
            IsActive = true
        },
        new Job
        {
            Id = 11,
            Title = "QA Automation Engineer",
            Company = "MultiChoice",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 420_000,
            MaxSalary = 620_000,
            Description = "Ensure quality across MultiChoice's DStv streaming and broadcast platforms. Design and maintain automated test suites for web, mobile, and API testing.",
            Requirements = ["Selenium, Playwright, or Cypress", "API testing with Postman or RestAssured", "CI/CD integration for test pipelines", "Performance testing (JMeter, k6)", "ISTQB certification advantageous"],
            PostedDate = new DateTime(2026, 2, 22),
            IsActive = true
        },
        new Job
        {
            Id = 12,
            Title = "Senior .NET Developer",
            Company = "Entelect",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 580_000,
            MaxSalary = 820_000,
            Description = "Work on challenging consulting projects across multiple industries as part of Entelect's elite engineering team. Mentor junior developers and contribute to internal open-source tooling.",
            Requirements = ["5+ years C# / .NET Core", "Azure or AWS cloud services", "Clean Architecture and SOLID principles", "Entity Framework and SQL", "Mentoring and code review experience"],
            PostedDate = new DateTime(2026, 2, 20),
            IsActive = true
        },
        new Job
        {
            Id = 13,
            Title = "Platform Engineer",
            Company = "BBD",
            Location = "Pretoria",
            Type = "Full-Time",
            MinSalary = 520_000,
            MaxSalary = 740_000,
            Description = "Build and maintain BBD's internal developer platform, enabling delivery teams to ship faster. Own infrastructure automation, service meshes, and golden paths for microservice deployments.",
            Requirements = ["Kubernetes and Helm", "Terraform or Pulumi", "Go or Python scripting", "GitOps (ArgoCD, Flux)", "Observability stack (Grafana, Loki, Tempo)"],
            PostedDate = new DateTime(2026, 2, 18),
            IsActive = true
        },
        new Job
        {
            Id = 14,
            Title = "UI/UX Designer (Contract)",
            Company = "DVT",
            Location = "Remote",
            Type = "Contract",
            MinSalary = 350_000,
            MaxSalary = 550_000,
            Description = "Design user interfaces for DVT's enterprise consulting clients across banking, insurance, and retail. Conduct user research, create prototypes, and deliver design systems.",
            Requirements = ["Figma and Adobe Creative Suite", "User research and usability testing", "Design system creation", "Responsive and mobile-first design", "Front-end HTML/CSS knowledge a plus"],
            PostedDate = new DateTime(2026, 2, 15),
            IsActive = true
        },
        new Job
        {
            Id = 15,
            Title = "Junior Software Developer",
            Company = "Synthesis",
            Location = "Johannesburg",
            Type = "Full-Time",
            MinSalary = 300_000,
            MaxSalary = 450_000,
            Description = "Kick-start your career at Synthesis, a leading SA fintech consultancy. Join a structured graduate programme with mentorship, training, and exposure to banking and capital markets systems.",
            Requirements = ["BSc Computer Science or similar", "Java, C#, or Python fundamentals", "Understanding of data structures and algorithms", "Eagerness to learn and grow", "Strong problem-solving skills"],
            PostedDate = new DateTime(2026, 2, 10),
            IsActive = true
        }
    ];
}

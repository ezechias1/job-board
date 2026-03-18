# Job Board API

A RESTful Web API for South African tech job listings, built with ASP.NET Core 8.

> **Note:** Rebuilt from vanilla JS to demonstrate C# / .NET skills.

## Tech Stack

- **Language:** C# 12
- **Framework:** ASP.NET Core 8 (Minimal hosting)
- **Documentation:** Swagger / OpenAPI (Swashbuckle)
- **Data:** In-memory store seeded with 15 SA tech job listings
- **Architecture:** Controllers, Services, Interfaces, Models

## API Endpoints

| Method   | Endpoint            | Description                          |
| -------- | ------------------- | ------------------------------------ |
| `GET`    | `/api/jobs`         | List all active jobs                 |
| `GET`    | `/api/jobs?query=`  | Search by title, company, or description |
| `GET`    | `/api/jobs?location=` | Filter by location                |
| `GET`    | `/api/jobs?type=`   | Filter by employment type            |
| `GET`    | `/api/jobs/{id}`    | Get a single job by ID               |
| `POST`   | `/api/jobs`         | Create a new job listing             |
| `PUT`    | `/api/jobs/{id}`    | Update an existing job listing       |
| `DELETE` | `/api/jobs/{id}`    | Soft-delete a job listing            |

Query parameters can be combined, e.g. `/api/jobs?query=developer&location=Cape Town&type=Full-Time`.

## How to Run

```bash
dotnet run
```

The API starts at `http://localhost:5062` by default. Visit `/swagger` for interactive API documentation.

## Sample Companies

Takealot, Yoco, Investec, Discovery, FNB, Standard Bank, Vodacom, MTN, Capitec, Naspers, MultiChoice, Entelect, BBD, DVT, Synthesis

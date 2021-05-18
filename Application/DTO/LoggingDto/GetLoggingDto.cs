using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.LoggingDto
{
    public class GetLoggingDto
    {
        public int Id { get; set; }

        public string Performer { get; set; }

        public string UseCaseName { get; set; }

        public object UseCaseData { get; set; }

        public DateTime LoggingDate { get; set; }
    }
}

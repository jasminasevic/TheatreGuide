using Application.Commands.CurrencyCommands;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfCurrencyCommands
{
    public class EfDeleteCurrencyCommand : EfBaseCommand, IDeleteCurrencyCommand
    {
        public EfDeleteCurrencyCommand(EfContext context) : base(context)
        {
        }

        public int Id => 14;

        public string Name => "Delete Currency Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public void Execute(int request)
        {
            var currency = Context.Currencies.Find(request);

            if (currency == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Currencies.Remove(currency);
            Context.SaveChanges();
        }
    }
}

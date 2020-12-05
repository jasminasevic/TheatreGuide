using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ActorCommands;
using Application.Commands.CategoryCommands;
using Application.Commands.CurrencyCommands;
using Application.Commands.DirectorCommands;
using Application.Commands.PurchaseCommands;
using Application.Commands.RepertoireCommands;
using Application.Commands.RoleCommands;
using Application.Commands.SceneCommands;
using Application.Commands.ShowCommands;
using Application.Commands.ShowFollowerCommands;
using Application.Commands.TheatreCommands;
using Application.Commands.UserCommands;
using Application.Commands.WriterCommands;
using EfCommands.EfActorCommands;
using EfCommands.EfCategoryCommands;
using EfCommands.EfCurrencyCommands;
using EfCommands.EfDirectorCommands;
using EfCommands.EfPurchaseCommands;
using EfCommands.EfRepertoireCommands;
using EfCommands.EfRoleCommands;
using EfCommands.EfSceneCommands;
using EfCommands.EfShowCommands;
using EfCommands.EfShowFolloweCommands;
using EfCommands.EfTheatreCommands;
using EfCommands.EfUserCommands;
using EfCommands.EfWriterCommands;
using EfDataAccess;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;

namespace Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            //EfContext
            services.AddDbContext<EfContext>();

            //Actors
            services.AddTransient<IAddActorCommand, EfAddActorCommand>();
            services.AddTransient<IDeleteActorCommand, EfDeleteActorCommand>();
            services.AddTransient<IEditActorCommand, EfEditActorCommand>();
            services.AddTransient<IGetActorsCommand, EfGetActorsCommand>();
            services.AddTransient<IGetActorCommand, EfGetActorCommand>();
            services.AddTransient<IGetActorsListCommand, EfGetActorsListCommand>();
            
            //Categories
            services.AddTransient<IAddCategoryCommand, EfAddCategoryCommand>();
            services.AddTransient<IDeleteCategoryCommand, EfDeleteCategoryCommand>();
            services.AddTransient<IEditCategoryCommand, EfEditCategoryCommand>(); 
            services.AddTransient<IGetCategoriesCommand, EfGetCategoriesCommand>();
            services.AddTransient<IGetCategoryCommand, EfGetCategoryCommand>();
            services.AddTransient<IGetCategoriesListCommand, EfGetCategoriesListCommand>();

            //Currencies
            services.AddTransient<IAddCurrencyCommand, EfAddCurrencyCommand>();
            services.AddTransient<IDeleteCurrencyCommand, EfDeleteCurrencyCommand>();
            services.AddTransient<IEditCurrencyCommand, EfEditCurrencyCommand>();
            services.AddTransient<IGetCurrenciesCommand, EfGetCurrenciesCommand>();
            services.AddTransient<IGetCurrenciesListCommand, EfGetCurrenciesListCommand>();
            services.AddTransient<IGetCurrencyCommand, EfGetCurrencyCommand>();

            //Directors
            services.AddTransient<IAddDirectorCommand, EfAddDirectorCommand>();
            services.AddTransient<IDeleteDirectorCommand, EfDeleteDirectorCommand>();
            services.AddTransient<IEditDirectorCommand, EfEditDirectorCommand>();
            services.AddTransient<IGetDirectorsCommand, EfGetDirectorsCommand>();
            services.AddTransient<IGetDirectorCommand, EfGetDirectorCommand>();
            services.AddTransient<IGetDirectorsListCommand, EfGetDirectorsListCommand>();

            //Purchases
            services.AddTransient<IAddPurchaseCommand, EfAddPurchaseCommand>();
            services.AddTransient<IDeletePurchaseCommand, EfDeletePurchaseCommand>();
            services.AddTransient<IEditPurchaseCommand, EfEditPurchaseCommand>();
            services.AddTransient<IGetPurchaseCommand, EfGetPurchaseCommand>();
            services.AddTransient<IGetPurchasesCommand, EfGetPurchasesCommand>();

            //Repertoires
            services.AddTransient<IAddRepertoireCommand, EfAddRepertoireCommand>();
            services.AddTransient<IDeleteRepertoireCommand, EfDeleteRepertoireCommand>();
            services.AddTransient<IEditRepertoireCommand, EfEditRepertoireCommand>();
            services.AddTransient<IGetRepertoireCommand, EfGetRepertoireCommand>();
            services.AddTransient<IGetRepertoiresCommand, EfGetRepertoiresCommand>();

            //Roles
            services.AddTransient<IAddRoleCommand, EfAddRoleCommand>();
            services.AddTransient<IDeleteRoleCommand, EfDeleteRoleCommand>();
            services.AddTransient<IEditRoleCommand, EfEditRoleCommand>();
            services.AddTransient<IGetRoleCommand, EfGetRoleCommand>();
            services.AddTransient<IGetRolesCommand, EfGetRolesCommand>();
            services.AddTransient<IGetRolesListCommand, EfGetRolesListCommand>();

            //Scenes
            services.AddTransient<IAddSceneCommand, EfAddSceneCommand>();
            services.AddTransient<IDeleteSceneCommand, EfDeleteSceneCommand>();
            services.AddTransient<IEditSceneCommand, EfEditSceneCommand>();
            services.AddTransient<IGetSceneCommand, EfGetSceneCommand>();
            services.AddTransient<IGetScenesCommand, EfGetScenesCommand>();
            services.AddTransient<IGetScenesListCommand, EfGetSceneListCommand>();
            services.AddTransient<IGetScenesTheatreCommand, EfGetScenesTheatreCommand>();

            //ShowFollowers
            services.AddTransient<IAddShowFollowerCommand, EfAddShowFollowerCommand>();
            services.AddTransient<IDeleteShowFollowerCommand, EfDeleteShowFollowerCommand>();

            //Shows
            services.AddTransient<IAddShowCommand, EfAddShowCommand>();
            services.AddTransient<IDeleteShowCommand, EfDeleteShowCommand>();
            services.AddTransient<IEditShowCommand, EfEditShowCommand>();
            services.AddTransient<IGetShowCommand, EfGetShowCommand>();
            services.AddTransient<IGetShowsCommand, EfGetShowsCommand>();
            services.AddTransient<IGetShowsListCommand, EfGetShowsListCommand>();
            services.AddTransient<IGetShowForRepertoireCommand, EfGetShowForRepertoireCommand>();
            services.AddTransient<IGetShowWithPricesForRepertoireCommand, EfGetShowWithPricesForRepertoireCommand>();

            //Theatres
            services.AddTransient<IAddTheatreCommand, EfAddTheatreCommand>();
            services.AddTransient<IDeleteTheatreCommand, EfDeleteTheatreCommand>();
            services.AddTransient<IEditTheatreCommand, EfEditTheatreCommand>();
            services.AddTransient<IGetTheatresCommand, EfGetTheatresCommand>();
            services.AddTransient<IGetTheatreCommand, EfGetTheatreCommand>();
            services.AddTransient<IGetTheatresListCommand, EfGetTheatresListCommand>();

            //Users
            services.AddTransient<IAddUserCommand, EfAddUserCommand>();
            services.AddTransient<IDeleteUserCommand, EfDeleteUserCommand>();
            services.AddTransient<IEditUserCommand, EfEditUserCommand>();
            services.AddTransient<IGetUsersCommand, EfGetUsersCommand>();
            services.AddTransient<IGetUserCommand, EfGetUserCommand>();

            //Writers
            services.AddTransient<IAddWriterCommand, EfAddWriterCommand>();
            services.AddTransient<IDeleteWriterCommand, EfDeleteWriterCommand>();
            services.AddTransient<IEditWriterCommand, EfEditWriterCommand>();
            services.AddTransient<IGetWritersCommand, EfGetWritersCommand>();
            services.AddTransient<IGetWriterCommand, EfGetWriterCommand>();

            services.AddCors();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            // global policy - assign here or on each controller
            app.UseCors(x => x.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                );


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseFileServer();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}

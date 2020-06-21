using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ActorCommands;
using Application.Commands.CategoryCommands;
using Application.Commands.DirectorCommands;
using Application.Commands.RoleCommands;
using Application.Commands.SceneCommands;
using Application.Commands.ShowCommands;
using Application.Commands.SubsceneCategoryCommands;
using Application.Commands.SubsceneCommands;
using Application.Commands.TheatreCommands;
using Application.Commands.UserCommands;
using Application.Commands.WriterCommands;
using EfCommands.EfActorCommands;
using EfCommands.EfCategoryCommands;
using EfCommands.EfDirectorCommands;
using EfCommands.EfRoleCommands;
using EfCommands.EfSceneCommands;
using EfCommands.EfShowCommands;
using EfCommands.EfSubsceneCategoryCommands;
using EfCommands.EfSubsceneCommands;
using EfCommands.EfTheatreCommands;
using EfCommands.EfUserCommands;
using EfCommands.EfWriterCommands;
using EfDataAccess;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

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
            
            //Categories
            services.AddTransient<IAddCategoryCommand, EfAddCategoryCommand>();
            services.AddTransient<IDeleteCategoryCommand, EfDeleteCategoryCommand>();
            services.AddTransient<IEditCategoryCommand, EfEditCategoryCommand>(); 
            services.AddTransient<IGetCategoriesCommand, EfGetCategoriesCommand>();
            services.AddTransient<IGetCategoryCommand, EfGetCategoryCommand>();

            //Directors
            services.AddTransient<IAddDirectorCommand, EfAddDirectorCommand>();
            services.AddTransient<IDeleteDirectorCommand, EfDeleteDirectorCommand>();
            services.AddTransient<IEditDirectorCommand, EfEditDirectorCommand>();
            services.AddTransient<IGetDirectorsCommand, EfGetDirectorsCommand>();
            services.AddTransient<IGetDirectorCommand, EfGetDirectorCommand>();

            //Roles
            services.AddTransient<IAddRoleCommand, EfAddRoleCommand>();
            services.AddTransient<IDeleteRoleCommand, EfDeleteRoleCommand>();
            services.AddTransient<IEditRoleCommand, EfEditRoleCommand>();
            services.AddTransient<IGetRolesCommand, EfGetRolesCommand>();
            services.AddTransient<IGetRoleCommand, EfGetRoleCommand>();

            //Scenes
            services.AddTransient<IAddSceneCommand, EfAddSceneCommand>();
            services.AddTransient<IDeleteSceneCommand, EfDeleteSceneCommand>();
            services.AddTransient<IEditSceneCommand, EfEditSceneCommand>();
            services.AddTransient<IGetSceneCommand, EfGetSceneCommand>();
            services.AddTransient<IGetScenesCommand, EfGetScenesCommand>();

            //Shows
            services.AddTransient<IAddShowCommand, EfAddShowCommand>();
            services.AddTransient<IDeleteShowCommand, EfDeleteShowCommand>();
            services.AddTransient<IEditShowCommand, EfEditShowCommand>();
            services.AddTransient<IGetShowCommand, EfGetShowCommand>();
            services.AddTransient<IGetShowsCommand, EfGetShowsCommand>();

            //SubsceneCategories
            services.AddTransient<IAddSubsceneCategoryCommand, EfAddSubsceneCategoryCommand>();
            services.AddTransient<IDeleteSubsceneCategoryCommand, EfDeleteSubsceneCategoryCommand>();
            services.AddTransient<IEditSubsceneCategoryCommand, EfEditSubsceneCategoryCommand>();
            services.AddTransient<IGetSubsceneCategoryCommand, EfGetSubsceneCategoryCommand>();
            services.AddTransient<IGetSubsceneCategoriesCommand, EfGetSubsceneCategoriesCommand>();

            //Subscenes
            services.AddTransient<IAddSubsceneCommand, EfAddSubsceneCommand>();
            services.AddTransient<IDeleteSubsceneCommand, EfDeleteSubsceneCommand>();
            services.AddTransient<IEditSubsceneCommand, EfEditSubsceneCommand>();
            services.AddTransient<IGetSubsceneCommand, EfGetSubsceneCommand>();
            services.AddTransient<IGetSubscenesCommand, EfGetSubscenesCommand>();

            //Theatres
            services.AddTransient<IAddTheatreCommand, EfAddTheatreCommand>();
            services.AddTransient<IDeleteTheatreCommand, EfDeleteTheatreCommand>();
            services.AddTransient<IEditTheatreCommand, EfEditTheatreCommand>();
            services.AddTransient<IGetTheatresCommand, EfGetTheatresCommand>();
            services.AddTransient<IGetTheatreCommand, EfGetTheatreCommand>();

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

           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseStaticFiles();
        }
    }
}

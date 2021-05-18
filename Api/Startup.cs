using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Api.Core;
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
using Application.UseCase;
using Application.Interfaces;
using Application.Validators.ActorValidators;
using Application.Validators.CategoryValidators;
using Application.Validators.CurrencyValidators;
using Application.Validators.DirectorValidators;
using Application.Validators.PurchaseValidators;
using Application.Validators.RepertoireValidators;
using Application.Validators.RoleValidators;
using Application.Validators.SceneValidators;
using Application.Validators.ShowValidators;
using Application.Validators.TheatreValidators;
using Application.Validators.UserValidators;
using Application.Validators.WriterValidators;
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
using Microsoft.AspNetCore.Authentication.JwtBearer;
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
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
using EfCommands.EfRegistrationCommands;
using Application.Commands.RegistrationCommands;
using Application.Validators.RegistrationValidators;
using EfCommands.Logging;
using EfCommands.Email;
using Application.Email;
using EfCommands.EfShowFollowerCommands;
using Application.Commands.SectorCommands;
using EfCommands.EfSectorCommands;
using EfCommands.EfContactUsComands;
using Application.Commands.ContactUsCommands;
using Application.Commands.LoggingCommands;

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

            //Email
            services.AddTransient<IEmailSender, SmtpEmailSender>();
            services.AddTransient<IAddContactUsMessageCommand, EfAddContactUsMessageCommand>();

            //Loggings
            services.AddTransient<IGetLoggingsCommand, EfGetLoggingsCommand>();

            //Purchases
            services.AddTransient<IAddPurchaseCommand, EfAddPurchaseCommand>();
            services.AddTransient<IDeletePurchaseCommand, EfDeletePurchaseCommand>();
            services.AddTransient<IEditPurchaseCommand, EfEditPurchaseCommand>();
            services.AddTransient<IGetPurchaseCommand, EfGetPurchaseCommand>();
            services.AddTransient<IGetPurchasesCommand, EfGetPurchasesCommand>();
            services.AddTransient<IGetPurchasesFilteredByTheatreCommand, EfGetPurchasesFilteredByTheatreCommand>();
            services.AddTransient<IGetPurchasesFilteredByUserCommand, EfGetPurchasesFilteredByUserCommand>();
            services.AddTransient<IGetCountedPurchasesFilteredByTheatreCommand, EfGetCountedPurchasesFilteredByTheatreCommand>();
            services.AddTransient<IGetRecentPurchasesFilteredByTheatreCommand, EfGetRecentPurchasesFilteredByTheatreCommand>();
            services.AddTransient<IGetCountedPurchasesCommand, EfGetCountedPurchasesCommand>();

            //Registration
            services.AddTransient<IRegisterUserCommand, EfRegisterUserCommand>();
            services.AddTransient<IRegisterBusinessUserCommand, EfRegisterBusinessUserCommand>();

            //Repertoires
            services.AddTransient<IAddRepertoireCommand, EfAddRepertoireCommand>();
            services.AddTransient<IDeleteRepertoireCommand, EfDeleteRepertoireCommand>();
            services.AddTransient<IEditRepertoireCommand, EfEditRepertoireCommand>();
            services.AddTransient<IGetRepertoireCommand, EfGetRepertoireCommand>();
            services.AddTransient<IGetRepertoiresCommand, EfGetRepertoiresCommand>();
            services.AddTransient<IGetUpcomingShowsCommand, EfGetUpcomingShowsCommand>();
            services.AddTransient<IGetUpcomingPremieresCommand, EfGetUpcomingPremieresCommand>();
            services.AddTransient<IGetRepertoiresFilteredByTheatreCommand, EfGetRepertoiresFilteredByTheatreCommand>();
            services.AddTransient<IGetRepertoireForEditCommand, EfGetRepertoireForEditCommand>();
            services.AddTransient<IGetRepertoiresFilteredByTheatreCommand, EfGetRepertoiresFilteredByTheatreCommand>();

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
            services.AddTransient<IGetSceneWithShowsCommand, EfGetSceneWithShowsCommand>();
            services.AddTransient<IGetScenesCommand, EfGetScenesCommand>();
            services.AddTransient<IGetScenesListCommand, EfGetSceneListCommand>();
            services.AddTransient<IGetScenesTheatreCommand, EfGetScenesTheatreCommand>();
            services.AddTransient<IGetScenesFilteredByTheatreCommand, EfGetScenesFilteredByTheatreCommand>();

            //Sectors
            services.AddTransient<IGetSectorWithUnavailableSeatsCommand, EfGetSectorWithUnavailableSeatsCommand>();

            //ShowsFollowers
            services.AddTransient<IAddShowFollowerCommand, EfAddShowFollowerCommand>();
            services.AddTransient<IDeleteShowFollowerCommand, EfDeleteShowFollowerCommand>();
            services.AddTransient<IGetCountedShowFollowersFilteredByTheatreCommand, EfGetCountedShowFollowersFilteredByTheatreCommand>();
            services.AddTransient<IGetFollowedShowsFilteredByUserCommand, EfGetFollowedShowsFilteredByUserCommand>();
            
            //Shows
            services.AddTransient<IAddShowCommand, EfAddShowCommand>();
            services.AddTransient<IDeleteShowCommand, EfDeleteShowCommand>();
            services.AddTransient<IEditShowCommand, EfEditShowCommand>();
            services.AddTransient<IGetShowCommand, EfGetShowCommand>();
            services.AddTransient<IGetShowsCommand, EfGetShowsCommand>();
            services.AddTransient<IGetShowsListCommand, EfGetShowsListCommand>();
            services.AddTransient<IGetShowForRepertoireCommand, EfGetShowForRepertoireCommand>();
            services.AddTransient<IGetShowWithPricesForRepertoireCommand, EfGetShowWithPricesForRepertoireCommand>();
            services.AddTransient<IGetPopularShowsCommand, EfGetPopularShowsCommand>();
            services.AddTransient<IGetPopularShowsFilteredByIdCommand, EfGetPopularShowsFilteredByIdCommand>();
            services.AddTransient<IGetPopularShowsFilteredByTheatreCommand, EfGetPopularShowsFilteredByTheatreCommand>();
            services.AddTransient<IGetPopularShowsFilteredByActorCommand, EfGetPopularShowsFilteredByActorCommand>();
            services.AddTransient<IGetPopularShowsFilteredByDirectorCommand, EfGetPopularShowsFilteredByDirectorCommand>();
            services.AddTransient<IGetPopularShowsFilteredByIdAndTheatreCommand, EfGetPopularShowsFilteredByIdAndTheatreCommand>();
            services.AddTransient<IGetShowsFilteredByTheatreCommand, EfGetShowsFilteredByTheatreCommand>();
            services.AddTransient<IGetShowBaseListFilteredByTheatreCommand, EfGetShowBaseListFilteredByTheatreCommand>();
            services.AddTransient<IGetShowsFollowersFilteredByUserIdCommand, EfGetShowsFollowersFilteredByUserIdCommand>();

            //Theatres
            services.AddTransient<IAddTheatreCommand, EfAddTheatreCommand>();
            services.AddTransient<IDeleteTheatreCommand, EfDeleteTheatreCommand>();
            services.AddTransient<IEditTheatreCommand, EfEditTheatreCommand>();
            services.AddTransient<IGetTheatresCommand, EfGetTheatresCommand>();
            services.AddTransient<IGetTheatreCommand, EfGetTheatreCommand>();
            services.AddTransient<IGetTheatreBaseInfoCommand, EfGetTheatreBaseInfoCommand>();
            services.AddTransient<IGetTheatresListCommand, EfGetTheatresListCommand>();
            services.AddTransient<IGetAllTheatresListCommand, EfGetAllTheatresListCommand>();
            services.AddTransient<IGetRecentlyJoinedTheatresCommand, EfGetRecentlyJoinedTheatresCommand>();
            services.AddTransient<IGetUserFilteredByIdCommand, EfGetUserFilteredByIdCommand>();
            services.AddTransient<IGetCountedApprovedTheatresCommand, EfGetCountedApprovedTheatresCommand>();

            //Users
            services.AddTransient<IAddUserCommand, EfAddUserCommand>();
            services.AddTransient<IDeleteUserCommand, EfDeleteUserCommand>();
            services.AddTransient<IEditUserCommand, EfEditUserCommand>();
            services.AddTransient<IGetUsersCommand, EfGetUsersCommand>();
            services.AddTransient<IGetUserCommand, EfGetUserCommand>();
            services.AddTransient<IGetPendingUserRequestsNumberCommand, EfGetPendingUserRequestsNumberCommand>();

            //Writers
            services.AddTransient<IAddWriterCommand, EfAddWriterCommand>();
            services.AddTransient<IDeleteWriterCommand, EfDeleteWriterCommand>();
            services.AddTransient<IEditWriterCommand, EfEditWriterCommand>();
            services.AddTransient<IGetWritersCommand, EfGetWritersCommand>();
            services.AddTransient<IGetWriterCommand, EfGetWriterCommand>();

            //Validators
            services.AddTransient<ActorValidator>();
            services.AddTransient<CategoryValidator>();
            services.AddTransient<CurrencyValidator>();
            services.AddTransient<DirectorValidator>();
            services.AddTransient<PurchaseValidator>();
            services.AddTransient<RegisterUserValidator>();
            services.AddTransient<RegisterBusinessUserValidator>();
            services.AddTransient<RepertoireValidator>();
            services.AddTransient<RoleValidator>();
            services.AddTransient<SceneValidator>();
            services.AddTransient<ShowValidator>();
            services.AddTransient<TheatreValidator>();
            services.AddTransient<UserValidator>();
            services.AddTransient<WriterValidator>();

            //Use cases and Token
            services.AddHttpContextAccessor();

            services.AddTransient<IApplicationPerformer>(x =>
            {
                var accessor = x.GetService<IHttpContextAccessor>();
                //izvuci token
                //pozicionirati se na payload
                //izvuci ActorData claim
                //Deserijalizovati actorData string u c# objekat

                var user = accessor.HttpContext.User;

                if (user.FindFirst("PerformerData") == null)
                {
                    return new AnonymusPerformer();
                }

                var performerString = user.FindFirst("PerformerData").Value;

                var performer = JsonConvert.DeserializeObject<JwtPerformer>(performerString);

                return performer;

            });

            services.AddTransient<UseCaseExecutor>();
            services.AddTransient<IUseCaseLogger, DatabaseUseCaseLogger>();
            services.AddTransient<JwtManager>();



            //Authentication
            services.AddAuthentication(options =>
            {
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = "asp_api",
                    ValidateIssuer = true,
                    ValidAudience = "Any",
                    ValidateAudience = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ThisIsMyVerySecretKey")),
                    ValidateIssuerSigningKey = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                };
            });



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

            app.UseMiddleware<GlobalExceptionHandler>();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}

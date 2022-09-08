using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using REST_EF_MVC.Controllers;

namespace REST_EF_MVC.web
{
    public class Startup
    {
        //database in/out
        private PersonsRepository persons = new PersonsRepository();
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
                
        public IConfiguration Configuration { get; }

        
        // declaration database singleton instance as IPersonRepostory persons
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //cors
            services.AddCors(options =>

            {

                options.AddPolicy("AllowMyOrigin",

                builder => builder.WithOrigins("http://localhost:4201",
                                                 "https://localhost:44382/api/persons").AllowAnyHeader().AllowAnyMethod().AllowCredentials());

            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
                services.AddSingleton(typeof(PersonsRepository), persons);
            }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            //cors
            app.UseCors("AllowMyOrigin");

            app.UseHttpsRedirection();
            app.UseMvc();
            //sample data from data module
            //persons.GenerateSampleData();
        }
    }
}

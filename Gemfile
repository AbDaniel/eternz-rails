source 'https://rubygems.org'

ruby '2.2.1'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.3'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

gem 'sass'
gem 'bower-rails'
gem 'angular-rails-templates'
gem 'paperclip'

group :test, :development do
  gem 'rspec-rails'
  gem 'factory_girl_rails', '~> 4.0'
  gem 'capybara'
  gem 'database_cleaner'
  gem 'selenium-webdriver'
end

gem 'foreman'
group :production, :staging do
  gem 'aws-sdk-v1'
  gem 'rails_12factor'
  gem 'rails_stdout_logging'
  gem 'rails_serve_static_assets'
end

gem 'oa-core', '~> 0.3.2'
gem 'spree', '3.0.2'
gem 'spree_gateway', github: 'spree/spree_gateway', branch: '3-0-stable'
gem 'spree_auth_devise', github: 'spree/spree_auth_devise', branch: '3-0-stable'
gem 'spree_social', github: 'spree-contrib/spree_social', branch: '3-0-stable'
gem 'materialize-sass'
gem 'pg', group: :production
group :development do
  gem 'xray-rails'
end
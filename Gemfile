source 'https://rubygems.org'
#ruby version
ruby '2.2.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5.1'
# Use postgresql
gem 'pg'
# puma webserver
gem 'puma'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# jquery
gem 'jquery-rails'

gem 'font-awesome-rails'
gem 'boostrap-sass'
gem 'bourbon'
gem 'neat'

# omniauth for facebook
gem 'omniauth-facebook'

gem 'faye-websocket', '0.10.0'
gem 'websocket-rails'

# Facebook API
gem 'koala'
gem 'geocoder'

# lets use react!
gem 'react-rails'
#gem 'react-rails-hot-loader', :git => 'git://github.com/rmosolgo/react-rails-hot-loader.git'


#browserify, because require is nice
gem 'browserify-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# yelp for resturant info
gem 'yelp'

group :development do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  # better error msgs
  gem 'better_errors'
  # see emails in browser
  gem 'letter_opener'
  # too many secrets => cootys rat semen
  gem 'figaro'
end

group :test do
  gem "codeclimate-test-reporter", require: nil
end

group :production do
  gem 'rails_12factor'
  gem 'heroku-deflater'
  gem 'htmlcompressor'
end


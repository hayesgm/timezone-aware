# Timezone Aware

Timezone aware is a Rails gem to automically localize each request to a user's own timezone.  A user's timezone is detected via JavaScript, then `Time.zone` is set automatically in an `around_filter` for each request from that user.  In your views and controllers, you can simply call `Time.zone.now` and know this will be in the user's local time.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'timezone-aware'
```

Add `timezone-aware.js` to `application.js`

```javascript
//=require timezone-aware
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install timezone-aware

## Usage

Timezone aware automatically sets `Time.zone` during each request.  After the JavaScript determines the user's timezone (via [jstz.js](http://pellepim.bitbucket.org/jstz/)), we set a cookie `time_zone`.  Timezone aware then sets `Time.zone` based on this cookie in an `around_filter`.

**Note: this is not thread safe as global Time.zone is being set for each request.**

## Examples

An example view: **home.html.erb**
```ruby
The time is now <%= Time.zone.now %>
```

Converting time zone back and forth
```ruby
Time.now.utc.in_time_zone(Time.zone)
```

## TODO

* Add Poltergiest test cases
* Explore ways to get correct timezone on first request
* Explore ways to make thread safe

## Contributing

1. Fork it ( https://github.com/hayesgm/timezone-aware/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

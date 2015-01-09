require 'active_support/concern'

module TimezoneAware
  module Helpers
    extend ActiveSupport::Concern

    # Gets timezone
    def user_time_zone
      ActiveSupport::TimeZone[cookies[:time_zone]] if cookies[:time_zone]
    end

    # Note, this is not thread safe
    def set_time_zone
      old_time_zone = Time.zone

      new_time_zone = user_time_zone()
      
      Time.zone = new_time_zone if new_time_zone

      yield
    ensure # make sure we restore old time zone
      Time.zone = old_time_zone
    end

    included do
      around_filter :set_time_zone
    end
  end
end
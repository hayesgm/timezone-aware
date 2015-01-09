require 'timezone-aware/helpers'

module TimezoneAware
  module Rails
    class Engine < ::Rails::Engine
      initializer "timezone-aware.load_helpers" do
        ActiveSupport.on_load(:action_controller) do
          include TimezoneAware::Helpers
        end
      end
    end
  end
end
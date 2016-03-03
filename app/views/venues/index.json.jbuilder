json.array!(@venues) do |venue|
  json.extract! venue, :id, :name, :location, :hours, :phone_number, :description
  json.url venue_url(venue, format: :json)
end

class AddVenueToRequest < ActiveRecord::Migration
  def change
    add_reference :requests, :venue, index: true, foreign_key: true
  end
end

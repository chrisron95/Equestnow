class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name
      t.string :location
      t.string :hours
      t.string :phone_number
      t.text :description

      t.timestamps null: false
    end
  end
end

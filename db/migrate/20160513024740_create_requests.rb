class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.string :song
      t.string :artist
      t.string :album
      t.string :album_cover

      t.timestamps null: false
    end
  end
end

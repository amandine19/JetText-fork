class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
    	t.string :name
    	t.string :style
    	t.integer :page_id
        t.timestamps

    end
  end
end

class CreateTableUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|

    t.string :name		
    t.attachment :file
    t.string :type		
    t.string :url		
    t.integer :size
    end
  end
end

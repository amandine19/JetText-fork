class CreateTableUploads < ActiveRecord::Migration
  def change
    create_table :table_uploads do |t|

    t.string :name		
    t.string :type		
    t.string :url		
    t.integer :size
    end
  end
end

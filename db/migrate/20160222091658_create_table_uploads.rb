class CreateTableUploads < ActiveRecord::Migration
	  def change
	    create_table :table_uploads do |t|

	    t.string :name		
	    t.string :type		
	    t.string :url		
	    t.integer :size
	    t.integer :user_id
    end
  end
end

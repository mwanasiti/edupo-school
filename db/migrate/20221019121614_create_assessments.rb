class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|

      t.timestamps
    end
  end
end

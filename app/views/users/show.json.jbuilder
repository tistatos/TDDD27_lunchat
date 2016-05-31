json.extract! @user, :name, :picture, :uid, :id, :description
json.first (@user.first_name)


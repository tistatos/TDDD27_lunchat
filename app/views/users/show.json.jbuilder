json.extract! @user, :name, :picture, :uid, :id, :description
json.first (@user.first_name)
json.likes (@user.getLikes)


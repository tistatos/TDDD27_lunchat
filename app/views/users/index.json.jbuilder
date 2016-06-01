json.extract! @user, :name, :image, :uid, :id
json.first (@user.first_name)
json.friends (@user.friends)


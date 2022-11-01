class ApplicationController < ActionController::API
    include ActionController::Cookies
    #skip_before_action :authorized_user, :admin_user

end

Rails.application.routes.draw do
  resources :subject_teachers
  resources :student_assesments
  resources :student_assignments
  resources :users, only: [:index, :show, :patch, :create]
  resources :admins, only: [:index, :show, :patch, :create]
  resources :assignments, only: [:index, :show, :patch, :create]
  resources :assessments, only: [:index, :show, :patch, :create]
  resources :classrooms, only: [:index, :show, :patch, :create]
  resources :subjects, only: [:index, :show, :patch, :create]
  resources :teachers, only: [:index, :show, :patch, :create]
  resources :parents, only: [:index, :show, :patch, :create]
  resources :students, only: [:index, :show, :patch, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # ADMIN AUTH
    post "/admin_login", to: "admin_sessions#create"
    delete "/admin_logout", to: "admin_sessions#destroy"
    get "/admin_auth", to: "persistence#admin"
    
  
    #TEACHER AUTH
    post "/teacher_login", to: "teacher_sessions#create"
    delete "/teacher_logout", to: "teacher_sessions#destroy"
    get "/teacher_auth", to: "persistence#teacher"
  
  
    #STUDENT AUTH
    post "/student_login", to: "student_sessions#create"
    delete "/student_logout", to: "student_sessions#destroy"
    get "/student_auth", to: "persistence#student"
  
  
    #PARENT AUTH
    post "/parent_login", to: "parent_sessions#create"
    delete "/parent_logout", to: "parent_sessions#destroy"
    get "/parent_auth", to: "persistence#parent"
    
end

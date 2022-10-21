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
end

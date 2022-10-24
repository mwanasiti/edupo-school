Rails.application.routes.draw do
  resources :users, only: [:index, :show, :update, :create]
  resources :admins, only: [:index, :show, :update, :create]
  resources :assignments, only: [:index, :show, :update, :create]
  resources :assessments, only: [:index, :show, :update, :create]
  resources :classrooms, only: [:index, :show, :update, :create]
  resources :subjects, only: [:index, :show, :update, :create]
  resources :teachers, only: [:index, :show, :update, :create]
  resources :parents, only: [:index, :show, :update, :create]
  resources :students, only: [:index, :show, :update, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end




Rails.application.routes.draw do
  root 'chatroom#index'
  get 'login', to: 'session#new'
  post 'login', to: 'session#create'
  get 'logout', to: 'session#destroy'
end

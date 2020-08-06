class PostsController < ApplicationController
  def index  # indexアクションを定義した
    @posts = Post.all
  end

  def new 
    
  end

  def create
    Post.create(content: params[:content])
  end

  def checked
    post = Post.find(params[:id])
    if post.checked then
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end
end

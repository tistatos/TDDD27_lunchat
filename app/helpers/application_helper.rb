module ApplicationHelper
  def header_class(the_class)
    content_for(:header_class) {the_class}
  end
end


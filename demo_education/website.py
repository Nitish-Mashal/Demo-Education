def get_website_user_home_page(user):
	"""Serve the Vue landing page (`www/index.html`) at `/` for Guests only.

	Logged-in users return None so Frappe keeps its normal resolution order
	(Role home page → Portal Settings → `me` / Desk).
	"""
	if user == "Guest":
		return "index"
	return None

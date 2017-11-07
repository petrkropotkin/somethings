import tornado.ioloop
import tornado.web

import os.path


#------------------views--------------

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        # self.write("Hello, world")
        
        self.render('index.html')

# --------settings--------------------

settings = dict(
	template_path=os.path.join(os.path.dirname(__file__), "templates"),
	static_path=os.path.join(os.path.dirname(__file__), "static"),
	debug=True,
	)
#---------ulrs------------------------

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ],**settings)

#------------------------------------
if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()


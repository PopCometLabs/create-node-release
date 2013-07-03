prefix=/usr/local

FILES=git/git-release
FILES+=git/git-major-release

install:
		npm install -g .
		install -d -m 0755 $(prefix)/bin
		install -m 0755 $(FILES) $(prefix)/bin

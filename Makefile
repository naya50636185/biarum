all:
	@echo "Use <make install> for installing dependencies."
	@echo "Use <make watch> to watch project files."
	@echo "Use <make build> to build project files."
install:
	npm install
	bower i
watch:
	gulp watch
build:
	gulp build

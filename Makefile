all:
	@echo "Use <make install> for installing dependencies."
	@echo "Use <make build> to build and compile project files."
install:
	npm install
	bower i
build:
	gulp watch
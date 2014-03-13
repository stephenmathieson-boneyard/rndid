
BINS = node_modules/.bin
BUILD_FLAGS ?= --dev
INSTALL_FLAGS ?= --dev
DEPS = node_modules components
SRC = index.js
TEST_RUNNER ?= browser
TEST_PORT ?= 8888

build: $(DEPS) $(SRC)
	$(BINS)/component-build $(BUILD_FLAGS)

components: component.json
	$(BINS)/component-install $(INSTALL_FLAGS)

node_modules: package.json
	npm install

test: build
	$(BINS)/component-test $(TEST_RUNNER)

clean:
	rm -rf build components

.PHONY: clean test kill-server

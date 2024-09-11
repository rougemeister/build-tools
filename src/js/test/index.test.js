
jest.mock('../tools.json', () => [
    {
      name: "Webpack",
      description: "Webpack is a versatile and powerful build tool used to bundle JavaScript and other assets for web development. It efficiently manages dependencies and offers advanced features like lazy loading and hot module replacement.",
      image: "webpack-logo.png",
      link: "https://webpack.js.org/"
    },
    {
      name: "Vite",
      description: "Vite is a modern build tool that takes advantage of native ES modules for faster development. It features instant server start, lightning-fast hot module replacement, and a highly optimized build process.",
      image: "vite.svg",
      link: "https://vitejs.dev/"
    },
    {
      name: "Parcel",
      description: "Parcel is a zero-configuration build tool that offers simplicity and speed for web development. It automatically handles bundling, minification, and code splitting with no need for complex setup.",
      image: "parcel.png",
      link: "https://parceljs.org/"
    },
    {
      name: "Rollup",
      description: "Rollup is a module bundler optimized for JavaScript libraries. It uses tree shaking to eliminate unused code, resulting in smaller and more efficient bundles.",
      image: "rollup.svg",
      link: "https://rollupjs.org/"
    },
    {
      name: "Gulp",
      description: "Gulp is a task runner that automates common development tasks like minification, compilation, and image optimization. It uses Node.js streams to speed up the build process and is known for its flexibility.",
      image: "gulp.svg",
      link: "https://gulpjs.com/"
    },
    {
      name: "Grunt",
      description: "Grunt is a task runner that helps automate repetitive tasks such as minification, compilation, and testing. It uses a configuration-based setup and has a large ecosystem of plugins for various tasks.",
      image: "grunt.svg",
      link: "https://gruntjs.com/"
    }
  ]);
  

  jest.mock('../../styles/main.scss', () => {});
  
  describe('index.js', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="content"></div>';
    });
  
    afterEach(() => {
      // Clean up after each test
      jest.resetModules();
      jest.clearAllMocks();
    });
  
    test('should set the innerHTML of #content with tools data', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  
      require('../index');
  

      const content = document.getElementById('content');
  
      // Assertions to check if the innerHTML contains expected content for each tool
      expect(content.innerHTML).toContain('Webpack');
      expect(content.innerHTML).toContain('Webpack is a versatile and powerful build tool');
      expect(content.innerHTML).toContain('images/webpack-logo.png');
      expect(content.innerHTML).toContain('https://webpack.js.org/');
  
      expect(content.innerHTML).toContain('Vite');
      expect(content.innerHTML).toContain('Vite is a modern build tool');
      expect(content.innerHTML).toContain('images/vite.svg');
      expect(content.innerHTML).toContain('https://vitejs.dev/');
  
      expect(content.innerHTML).toContain('Parcel');
      expect(content.innerHTML).toContain('Parcel is a zero-configuration build tool');
      expect(content.innerHTML).toContain('images/parcel.png');
      expect(content.innerHTML).toContain('https://parceljs.org/');
  
      expect(content.innerHTML).toContain('Rollup');
      expect(content.innerHTML).toContain('Rollup is a module bundler');
      expect(content.innerHTML).toContain('images/rollup.svg');
      expect(content.innerHTML).toContain('https://rollupjs.org/');
  
      expect(content.innerHTML).toContain('Gulp');
      expect(content.innerHTML).toContain('Gulp is a task runner');
      expect(content.innerHTML).toContain('images/gulp.svg');
      expect(content.innerHTML).toContain('https://gulpjs.com/');
  
      expect(content.innerHTML).toContain('Grunt');
      expect(content.innerHTML).toContain('Grunt is a task runner that helps automate repetitive tasks');
      expect(content.innerHTML).toContain('images/grunt.svg');
      expect(content.innerHTML).toContain('https://gruntjs.com/');
  
      expect(consoleSpy).toHaveBeenCalledWith('webpack-logo.png');
  
      consoleSpy.mockRestore();
    });
  });
  
// 包装函数
module.exports = function (grunt) {
    'use strict';
    // 任务配置，所有插件的配置信息
    grunt.initConfig({
        // 获取 package.json 的信息
        pkg: grunt.file.readJSON('package.json'),
        // uglify插件的配置信息
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%=pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'dist/js'
                }]
            }
        }
    });

    // 加载grunt插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 告诉grunt当我们在终端输入grunt时需要做什么（注意先后顺序）
    grunt.registerTask('default', ['uglify']);
}

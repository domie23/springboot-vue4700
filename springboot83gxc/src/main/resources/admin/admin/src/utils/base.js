const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot83gxc/",
            name: "springboot83gxc",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot83gxc/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "洋州影院购票管理系统的设计与实现"
        } 
    }
}
export default base

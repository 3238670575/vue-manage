//state :仓库存储数据的地方 
const state={ 
    isCollapse:false
}; 
//mutations :修改state的唯一手段 
const mutations={   
    COLLAPSEMEUN(state){ 
        state.isCollapse = !state.isCollapse
    }
};  
// action:处理action，可以书写自己的业务逻辑，也可以处理异步 
const actions={ 

};
const getters={ 
    
};
export default{  
    state, 
    mutations, 
    actions, 
    getters,
}
class post {
    constructor(characterName, characterLevel, characterClass, leechType, price, postType) {
        this.characterName = characterName;
        this.characterLevel = characterLevel;
        this.characterClass = characterClass;
        this.leechType = leechType;
        this.price = price;
        this.postType = postType;
    } 
}

const state = {
    post: new post('', 0, '', '', 0, ''),
    posts: [],
    postExists: false
};

const getters = {
    post: state => state.post,
    posts: state => state.posts
};

const actions = {
    async createPost({commit}){
        commit("NEW_POST")
    },
    async getPosts({commit}, type){
        let posts = [];
        if(type === 'B'){
            posts.push(new post("XXGodMode", 144, "F/P Mage", "Ulu 1", 70));
            posts.push(new post("PowerMan", 125, "I/L Mage", "Skele", 150));
            posts.push(new post("PrincessUlu", 150, "F/P Mage", "Skele", 140));
            posts.push(new post("FRogMode", 120, "I/L Mage", "WindRaider", 70));
            posts.push(new post("XXHunterXX", 138, "Bishop", "WindRaider", 70));
            posts.push(new post("BusyCircles", 140, "F/P Mage", "Ulu 2", 80));
            posts.push(new post("ManyShroom", 155, "Bishop", "Ulu 2", 80));
            posts.push(new post("LaaLaGurl", 138, "Bishop", "Ulu 1", 70));
            posts.push(new post("PrettyBoy", 131, "F/P Mage", "Harpies", 70));
            posts.push(new post("GG123", 144, "Bishop", "Ulu 2", 75)); 
        }else if(type === 'S'){
            posts.push(new post("Dreamerzz", 55, "", "Ulu 1", 70));
            posts.push(new post("HahaLater", 88, "", "Skele", 150));
            posts.push(new post("Kijiji", 98, "", "Skele", 140));
            posts.push(new post("Massy", 111, "", "WindRaider", 70));
            posts.push(new post("Lou6632", 45, "", "WindRaider", 70));
            posts.push(new post("4You2Man", 109, "", "Ulu 2", 80));
            posts.push(new post("Zakum", 99, "", "Ulu 2", 80));
            posts.push(new post("FirePowa", 61, "", "Ulu 1", 70));
            posts.push(new post("BoomBoom", 55, "", "Harpies", 70));
            posts.push(new post("12Lucy", 54, "", "Ulu 2", 75)); 
        }else if(type === 'P'){
            posts.push(new post("XXGodMode", 144, "F/P Mage", "Ulu 1", 70));
            posts.push(new post("PowerMan", 125, "I/L Mage", "Skele", 150));
            posts.push(new post("PrincessUlu", 150, "F/P Mage", "Skele", 140));
            posts.push(new post("FRogMode", 120, "I/L Mage", "WindRaider", 70));
            posts.push(new post("XXHunterXX", 138, "Bishop", "WindRaider", 70));
            posts.push(new post("BusyCircles", 140, "F/P Mage", "Ulu 2", 80));
            posts.push(new post("ManyShroom", 155, "Bishop", "Ulu 2", 80));
            posts.push(new post("LaaLaGurl", 138, "Bishop", "Ulu 1", 70));
            posts.push(new post("PrettyBoy", 131, "F/P Mage", "Harpies", 70));
            posts.push(new post("GG123", 144, "Bishop", "Ulu 2", 75)); 
        }
        commit("SET_POSTS", posts);
    }
};

const mutations = {
    NEW_POST(state){
        state.posts.push(state.post);
        state.postExists = true;
    },
    SET_POSTS(state, _posts){
        state.posts = _posts;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};
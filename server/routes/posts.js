const express = require("express")
const router = express.Router();
const PostModule = require('../controllers/posts')

router.get('/', PostModule.getPosts)
router.post('/',PostModule.createPost)
router.patch('/:id',PostModule.updatePost)
router.delete('/:id' , PostModule.deletePost)
router.patch('/:id/likePost' , PostModule.likePost)

module.exports = router;
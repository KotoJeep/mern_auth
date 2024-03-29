import asyncHandler from "express-async-handler";

// @desc    Auth user/set token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    console.log(res.body)
    res.status(200).json({message: 'Auth User'})
})
// @desc    Register a new user
// @route   POST /api/users/auth
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})
// @desc    logout user
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Logout User'})
})
// @desc   Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'User profile'})
})
// @desc   Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update profile'})
})
export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile}

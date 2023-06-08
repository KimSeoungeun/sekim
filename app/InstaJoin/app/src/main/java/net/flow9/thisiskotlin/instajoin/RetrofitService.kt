package net.flow9.thisiskotlin.instajoin

import okhttp3.MultipartBody
import okhttp3.RequestBody
import retrofit2.Call
import retrofit2.http.*

interface RetrofitService {

    @Multipart
    @PUT("user/profile/{user_id}/")
    fun changeProfile(
        @Path("user_id") userId: Int,
        @HeaderMap headers: Map<String, String>,
        @Part image: MultipartBody.Part,
        @Part("user") user : RequestBody,
    ):Call<Any>

    @GET("user/userInfo/")
    fun getUserInfo(
        @HeaderMap headers: Map<String, String>
    ):Call<UserInfo>

    @Multipart
    @POST("instagram/post/")
    fun uploadPost(
        @HeaderMap headers: Map<String, String>,
        @Part image : MultipartBody.Part,
        @Part("content") content : RequestBody
    ):Call<Any>

    @POST("instagram/post/like/{post_id}/")
    fun postLike(
        @Path("post_id") post_id: Int
    ): Call<Any>

    @POST("user/login/")
    @FormUrlEncoded
    fun instaLogin(
        @FieldMap params: HashMap<String, Any>
    ): Call<User>

    @POST("user/signup/")
    @FormUrlEncoded
    fun instaJoin(
        @FieldMap params: HashMap<String, Any>
    ): Call<User>

    @GET("instagram/post/list/all/")
    fun getInstagramPosts(

    ):Call<ArrayList<InstaPost>>
}
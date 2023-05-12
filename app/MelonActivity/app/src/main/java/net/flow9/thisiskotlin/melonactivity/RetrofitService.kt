package net.flow9.thisiskotlin.melonactivity

import okhttp3.MultipartBody
import okhttp3.RequestBody
import retrofit2.Call
import retrofit2.http.*


interface RetrofitService {

    @GET("melon/list/")
    fun getSongList():Call<ArrayList<Song>>


}
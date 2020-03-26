 <template>
  <div class="login-footer">
    <div class="footer-link">
      <a href="https://github.com/wonderl17">github</a><span>|</span>
      <a href="https://www.bilibili.com/">bilibili</a><span>|</span>
      <a href="https://www.zhihu.com/">知乎</a><span>|</span>
      <a href="https://juejin.im/">掘金</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">wonderl17.com</span> All Right Reserved</div>
  </div>
</template>

<script>
export default {
    name:'login-footer'
}
</script>

<style lang="scss">
    .login-footer{
      height: 100px;
      background-color: #FFF;
      margin-top: 60px;
      font-size: 16px;
      color: #999;
      text-align: center;
      .footer-link{
        a{
          color: #999;
          display:inline-block;
        }
        span{
          margin: 0 10px;
        }
        margin-bottom: 13px;
      }
      
    }
</style>
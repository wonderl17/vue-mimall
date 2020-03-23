 <template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
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
    name:'nav-footer'
}
</script>

<style lang="scss">
    .footer{
      height: 234px;
      border-top: 4px solid #FF6600;
      background-color: #333;
      font-size: 16px;
      color: #999;
      text-align: center;
      .footer-logo{
          margin-top: 46px;
          margin-bottom: 31px;
          img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
          }
          
      }
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
      .copyright{
        .domain{
          color: #FF6600;
        }
      }
    }
</style>
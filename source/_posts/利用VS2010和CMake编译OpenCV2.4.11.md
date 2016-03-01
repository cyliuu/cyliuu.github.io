---
title: 利用VS2010和CMake编译OpenCV2.4.11
date: 2016-02-29 20:42:00
category: 
- 技术
tags: 
- VS2010 
- CMake 
- OpenCV
---
## 配置开发环境
### 下载与安装
1. [OpenCV2.4.11](http://opencv.org/downloads.html)
2. [CMake](https://cmake.org/download/)

### 配置环境变量
1. 在系统属性-环境变量-用户变量中新建变量，名为opencv，值为自己解压opencv路径下的build路径，如“D:\opencv\build”（路径名尽量不含空格，方便以后Matlab与OpenCV混合编程）
2. 在系统属性-环境变量-系统变量中编辑Path变量，在末尾添加“ %opencv%\x86\vc10\bin;%opencv%\x64\vc10\bin”
3. 编写OpenCV的工程属性表：在D:\opencv下新建文件opencv2411.props，编辑内容为：
```
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ImportGroup Label="PropertySheets" />
  <PropertyGroup Label="UserMacros" />
  <PropertyGroup>
    <IncludePath>$(OPENCV)\include;$(IncludePath)</IncludePath>
    <LibraryPath Condition="'$(Platform)'=='Win32'">$(OPENCV)\x86\vc10\lib;$(LibraryPath)</LibraryPath>
    <LibraryPath Condition="'$(Platform)'=='X64'">$(OPENCV)\x64\vc10\lib;$(LibraryPath)</LibraryPath>
  </PropertyGroup>
  <ItemDefinitionGroup>
    <Link Condition="'$(Configuration)'=='Debug'">
      <AdditionalDependencies>
        opencv_calib3d2411d.lib;opencv_contrib2411d.lib;opencv_core2411d.lib;
        opencv_features2d2411d.lib;opencv_flann2411d.lib;opencv_gpu2411d.lib;opencv_highgui2411d.lib;
        opencv_imgproc2411d.lib;opencv_legacy2411d.lib;opencv_ml2411d.lib;opencv_nonfree2411d.lib;
        opencv_objdetect2411d.lib;opencv_ocl2411d.lib;opencv_photo2411d.lib;opencv_stitching2411d.lib;
        opencv_superres2411d.lib;opencv_ts2411d.lib;opencv_video2411d.lib;opencv_videostab2411d.lib;
        %(AdditionalDependencies)
      </AdditionalDependencies>
    </Link>
    <Link Condition="'$(Configuration)'=='Release'">
      <AdditionalDependencies>
        opencv_calib3d2411.lib;opencv_contrib2411.lib;opencv_core2411.lib;opencv_features2d2411.lib;
        opencv_flann2411.lib;opencv_gpu2411.lib;opencv_highgui2411.lib;opencv_imgproc2411.lib;opencv_legacy2411.lib;
        opencv_ml2411.lib;opencv_nonfree2411.lib;opencv_objdetect2411.lib;opencv_ocl2411.lib;opencv_photo2411.lib;
        opencv_stitching2411.lib;opencv_superres2411.lib;opencv_ts2411.lib;opencv_video2411.lib;opencv_videostab2411.lib;
        %(AdditionalDependencies)
      </AdditionalDependencies>
    </Link>
  </ItemDefinitionGroup>
  <ItemGroup />
</Project>
```

## 利用CMake编译OpenCV2.4.11
1. 打开CMake软件，根据实际情况设置Where is the source code和Where to build为相应路径，如：![Cmake编译OpenCV](./uploads/cmake.png)
2. 依次点击Configure和Generate


## 载入OpenCV工程和添加测试项目
1. 点击OpenCV工程目录下的OpenCV.sln
2. 右键解决方案资源管理器中的解决方案，选择添加-现有项目，在目录中选择测试项目的工程文件如cvut_test下的cvut_test.vcxproj，然后将cvut_test项目设为启动项目![添加cvut_test项目](./uploads/cvut_test.png)
3. 右键属性管理器中的cvut_test，选择添加现有属性表，在目录中选择OpenCV的工程属性表如D:\opencv下的opencv2411.props
4. 之后就可以方便地执行测试项目和查看其调用的OpenCV源码了

## 参考资料
* [win7 64位下VS2010和opencv 2.4.11的配置](http://blog.csdn.net/hnyzwtf/article/details/46403619)
* [Windows下利用CMake和VS2013编译OpenCV](http://www.nmtree.net/2014/03/19/windows_build-opencv-with-cmake-and-vs2013.html)
* [opencv + cmake + vs2010 配置过程](http://blog.sina.com.cn/s/blog_8b6c17eb0101l7zd.html)
//
//  ConfigModule.m
//  TrueTest
//
//  Created by Patipan Ongarj on 25/11/2563 BE.
//
#import <Foundation/Foundation.h>
#import "ConfigModule.h"

@implementation ConfigModule

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BuildEnvironment"];
  
  return @{ @"buildEnvironment": buildEnvironment };
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

@end

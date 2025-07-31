import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Settings, 
  FolderOpen, 
  PlayCircle, 
  Camera, 
  Upload,
  Info,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AutomationSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    leagueClientPath: 'C:\\Riot Games\\League of Legends\\LeagueClient.exe',
    obsStudioPath: 'C:\\Program Files\\obs-studio\\bin\\64bit\\obs64.exe',
    recordingFolder: 'C:\\Users\\%USERNAME%\\Videos\\LoL Replays',
    autoUploadToYoutube: true,
    obsSceneName: 'League of Legends Recording',
    recordingQuality: 'high',
    autoStartRecording: true,
    watchForNewReplays: true,
    uploadAfterRecording: true
  });

  const handleSaveSettings = () => {
    // Save settings to localStorage or database
    localStorage.setItem('automationSettings', JSON.stringify(settings));
    toast({
      title: "Settings Saved",
      description: "Automation settings have been saved successfully.",
      duration: 3000
    });
  };

  const testPath = (path: string, type: 'league' | 'obs') => {
    // In a real app, this would verify the path exists
    toast({
      title: "Path Test",
      description: `Testing ${type} path... (This would verify file exists in desktop app)`,
      duration: 2000
    });
  };

  return (
    <div className="space-y-6">
      <Card className="gaming-card border-gold/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Settings className="w-5 h-5 text-gold" />
            Automation Configuration
          </CardTitle>
          <CardDescription>
            Configure paths and settings for automatic League of Legends recording and uploading
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Application Paths */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              Application Paths
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="leaguePath">League of Legends Client Path</Label>
              <div className="flex gap-2">
                <Input
                  id="leaguePath"
                  value={settings.leagueClientPath}
                  onChange={(e) => setSettings(prev => ({ ...prev, leagueClientPath: e.target.value }))}
                  placeholder="C:\\Riot Games\\League of Legends\\LeagueClient.exe"
                />
                <Button 
                  variant="outline" 
                  onClick={() => testPath(settings.leagueClientPath, 'league')}
                >
                  Test
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="obsPath">OBS Studio Path</Label>
              <div className="flex gap-2">
                <Input
                  id="obsPath"
                  value={settings.obsStudioPath}
                  onChange={(e) => setSettings(prev => ({ ...prev, obsStudioPath: e.target.value }))}
                  placeholder="C:\\Program Files\\obs-studio\\bin\\64bit\\obs64.exe"
                />
                <Button 
                  variant="outline" 
                  onClick={() => testPath(settings.obsStudioPath, 'obs')}
                >
                  Test
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recordingFolder">Recording Output Folder</Label>
              <Input
                id="recordingFolder"
                value={settings.recordingFolder}
                onChange={(e) => setSettings(prev => ({ ...prev, recordingFolder: e.target.value }))}
                placeholder="C:\\Users\\%USERNAME%\\Videos\\LoL Replays"
              />
            </div>
          </div>

          <Separator />

          {/* Recording Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Recording Settings
            </h3>

            <div className="space-y-2">
              <Label htmlFor="obsScene">OBS Scene Name</Label>
              <Input
                id="obsScene"
                value={settings.obsSceneName}
                onChange={(e) => setSettings(prev => ({ ...prev, obsSceneName: e.target.value }))}
                placeholder="League of Legends Recording"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quality">Recording Quality</Label>
              <Select 
                value={settings.recordingQuality} 
                onValueChange={(value: 'high' | 'medium' | 'low') => 
                  setSettings(prev => ({ ...prev, recordingQuality: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High (1080p 60fps)</SelectItem>
                  <SelectItem value="medium">Medium (720p 60fps)</SelectItem>
                  <SelectItem value="low">Low (720p 30fps)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-start Recording</Label>
                <div className="text-sm text-muted-foreground">
                  Automatically start OBS recording when replay begins
                </div>
              </div>
              <Switch
                checked={settings.autoStartRecording}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, autoStartRecording: checked }))
                }
              />
            </div>
          </div>

          <Separator />

          {/* Upload Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Automation
            </h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-upload to YouTube</Label>
                <div className="text-sm text-muted-foreground">
                  Automatically upload videos after recording completes
                </div>
              </div>
              <Switch
                checked={settings.autoUploadToYoutube}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, autoUploadToYoutube: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Upload After Recording</Label>
                <div className="text-sm text-muted-foreground">
                  Start upload immediately when recording finishes
                </div>
              </div>
              <Switch
                checked={settings.uploadAfterRecording}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, uploadAfterRecording: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Watch for New Replays</Label>
                <div className="text-sm text-muted-foreground">
                  Monitor replay folder for new files automatically
                </div>
              </div>
              <Switch
                checked={settings.watchForNewReplays}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, watchForNewReplays: checked }))
                }
              />
            </div>
          </div>

          <Separator />

          {/* Automation Status */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Web App Limitation:</strong> This web application cannot directly launch desktop applications. 
              When you start the system, you'll receive instructions to manually open League Client and OBS Studio. 
              For full automation, consider using the desktop version.
            </AlertDescription>
          </Alert>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Configuration Ready
              </Badge>
            </div>
            <Button onClick={handleSaveSettings} className="bg-gold hover:bg-gold/80">
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Setup Guide */}
      <Card className="gaming-card border-blue-rift/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <PlayCircle className="w-5 h-5 text-blue-rift" />
            Quick Setup Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-background">
                1
              </div>
              <div>
                <p className="font-medium">Configure Application Paths</p>
                <p className="text-muted-foreground">Set correct paths for League Client and OBS Studio</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-background">
                2
              </div>
              <div>
                <p className="font-medium">Setup OBS Scene</p>
                <p className="text-muted-foreground">Create a scene in OBS with game capture for League of Legends</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-background">
                3
              </div>
              <div>
                <p className="font-medium">Configure YouTube Upload</p>
                <p className="text-muted-foreground">Set up YouTube API credentials in Settings for auto-upload</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-background">
                4
              </div>
              <div>
                <p className="font-medium">Start System</p>
                <p className="text-muted-foreground">Click "Start System" and follow the automation prompts</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};